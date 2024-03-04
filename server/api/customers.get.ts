export default defineEventHandler(async (event) => {
  // Simulando apenas uma lentidão na chamada com essa Promise.
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return {
    customers: [
      {
        id: 1,
        name: "John Smith",
        document: "123456789",
        email: "john@example.com",
        phone: "555-1234",
        active: true,
      },
      {
        id: 2,
        name: "Alice Johnson",
        document: "987654321",
        email: "alice@example.com",
        phone: "555-5678",
        active: false,
      },
      {
        id: 3,
        name: "Michael Brown",
        document: "456789123",
        email: "michael@example.com",
        phone: "555-9012",
        active: true,
      },
      {
        id: 4,
        name: "Emily Davis",
        document: "321654987",
        email: "emily@example.com",
        phone: "555-3456",
        active: true,
      },
      {
        id: 5,
        name: "William Wilson",
        document: "789123456",
        email: "william@example.com",
        phone: "555-7890",
        active: false,
      },
      {
        id: 6,
        name: "Sophia Martinez",
        document: "654987321",
        email: "sophia@example.com",
        phone: "555-2345",
        active: true,
      },
      {
        id: 7,
        name: "James Taylor",
        document: "147258369",
        email: "james@example.com",
        phone: "555-6789",
        active: true,
      },
      {
        id: 8,
        name: "Olivia Clark",
        document: "852369741",
        email: "olivia@example.com",
        phone: "555-0123",
        active: false,
      },
      {
        id: 9,
        name: "Daniel Rodriguez",
        document: "369852147",
        email: "daniel@example.com",
        phone: "555-4567",
        active: true,
      },
      {
        id: 10,
        name: "Ava Lewis",
        document: "258147369",
        email: "ava@example.com",
        phone: "555-8901",
        active: true,
      },
    ],
  };
});
