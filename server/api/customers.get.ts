export default defineEventHandler(async (event) => {
  // Simulando apenas uma lentidão na chamada com essa Promise.
  return {
    customers: [
      {
        id: 1,
        name: "John Smith",
        document: "123456789",
        email: "john@example.com",
        phone: "(41) 95553-4566",
        useProducts: [
          {
            id: 1,
            name: "Web Development",
          },
          {
            id: 3,
            name: "Data Stone Lab",
          },
          {
            id: 4,
            name: "Data Stone Mail",
          },
        ],
        active: true,
      },
      {
        id: 2,
        name: "Alice Johnson",
        document: "987654321",
        email: "alice@example.com",
        phone: "(41) 95553-4555",
        useProducts: [
          {
            id: 1,
            name: "Web Development",
          },
          {
            id: 3,
            name: "Data Stone Lab",
          },
          {
            id: 4,
            name: "Data Stone Mail",
          },
        ],
        active: false,
      },
      {
        id: 3,
        name: "Michael Brown",
        document: "456789123",
        email: "michael@example.com",
        phone: "(41) 95553-6889",
        useProducts: [
          {
            id: 1,
            name: "Web Development",
          },
          {
            id: 3,
            name: "Data Stone Lab",
          },
          {
            id: 4,
            name: "Data Stone Mail",
          },
        ],
        active: true,
      },
      {
        id: 4,
        name: "Emily Davis",
        document: "321654987",
        email: "emily@example.com",
        phone: "(41) 95553-7356",
        useProducts: [
          {
            id: 1,
            name: "Web Development",
          },
          {
            id: 3,
            name: "Data Stone Lab",
          },
          {
            id: 4,
            name: "Data Stone Mail",
          },
        ],
        active: true,
      },
      {
        id: 5,
        name: "William Wilson",
        document: "789123456",
        email: "william@example.com",
        phone: "(41) 95553-2424",
        useProducts: [
          {
            id: 1,
            name: "Web Development",
          },
          {
            id: 3,
            name: "Data Stone Lab",
          },
        ],
        active: false,
      },
      {
        id: 6,
        name: "Sophia Martinez",
        document: "654987321",
        email: "sophia@example.com",
        phone: "(41) 95553-5656",
        useProducts: [
          {
            id: 1,
            name: "Web Development",
          },
          {
            id: 3,
            name: "Data Stone Lab",
          },
        ],
        active: true,
      },
      {
        id: 7,
        name: "James Taylor",
        document: "147258369",
        email: "james@example.com",
        phone: "(41) 95553-6767",
        useProducts: [
          {
            id: 4,
            name: "Data Stone Mail",
          },
        ],
        active: true,
      },
      {
        id: 8,
        name: "Olivia Clark",
        document: "852369741",
        email: "olivia@example.com",
        phone: "(41) 95553-8899",
        useProducts: [
          {
            id: 1,
            name: "Web Development",
          },
          {
            id: 3,
            name: "Data Stone Lab",
          },
        ],
        active: false,
      },
      {
        id: 9,
        name: "Daniel Rodriguez",
        document: "369852147",
        email: "daniel@example.com",
        phone: "(41) 95553-5757",
        useProducts: [
          {
            id: 1,
            name: "Web Development",
          },
          {
            id: 3,
            name: "Data Stone Lab",
          },
          {
            id: 4,
            name: "Data Stone Mail",
          },
        ],
        active: true,
      },
      {
        id: 10,
        name: "Ava Lewis",
        document: "258147369",
        email: "ava@example.com",
        phone: "(41) 95553-5789",
        useProducts: [
          {
            id: 1,
            name: "Web Development",
          },
        ],
        active: true,
      },
    ],
  };
});
