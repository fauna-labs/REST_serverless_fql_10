import { APIGatewayProxyHandler } from "aws-lambda";
import { Client, QuerySuccess, fql } from 'fauna';

type InventoryItem = {
  name: string;
  price: number;
  quantity: number;
};

const client = new Client({ secret: process.env.FAUNA_SECRET });

export const create: APIGatewayProxyHandler = async (event) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid request body' }),
      };
    }

    const data = JSON.parse(event.body) as InventoryItem;
    
    if (!data) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Parsed data is invalid' }),
      };
    }

    const response: QuerySuccess<InventoryItem> = await client.query(
      fql`Inventory.create(${data})`
    );
    
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};

export const deleteItem: APIGatewayProxyHandler = async (event) => {
  if (!event.pathParameters || !event.pathParameters.id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'ID is required' }),
    };
  }

  console.log('Path Parameters:', event.pathParameters);

  const id = String(event.pathParameters.id);

  try {
    const response: QuerySuccess<InventoryItem> = await client.query(fql`
      let toDelete = Inventory.byId(${id})
      toDelete!.delete()
    `);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

export const read: APIGatewayProxyHandler = async (event) => {
  try {
    if (event.pathParameters && event.pathParameters.id) {
        console.log('Path Parameters:', event.pathParameters.id);

        const id = String(event.pathParameters.id);
        const response: QuerySuccess<InventoryItem> = await client.query(
            fql`Inventory.byId(${id})`
        );
        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } else {
        const response = await client.query(
            fql`Inventory.all()`
        );
        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};

export const update: APIGatewayProxyHandler = async (event) => {
  try {
    if (!event.pathParameters || !event.pathParameters.id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'ID must be provided.' }),
      };
    }

    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid request body' }),
      };
    }

    console.log('Path Parameters:', event.pathParameters.id);

    const id = event.pathParameters.id;
    const data = JSON.parse(event.body);

    const response: QuerySuccess<InventoryItem> = await client.query(fql`
      let itemToUpdate = Inventory.byId(${id});
      itemToUpdate!.update(${data})`
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};