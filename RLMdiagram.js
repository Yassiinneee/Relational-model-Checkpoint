const relationalDiagram = {
  TYPE: {
    Type_Id: "PK",
    Type_Name: "VARCHAR",
  },

  HOTEL: {
    Hotel_Id: "PK",
    Hotel_Name: "VARCHAR",
    Type_Id: "FK",
  },

  CATEGORY: {
    Category_Id: "PK",
    Category_Name: "VARCHAR",
    Price: "DECIMAL",
    Beds_numbers: "INT",
  },

  ROOM: {
    Room_Id: "PK",
    Floor: "INT",
    Hotel_Id: "FK",
    Category_Id: "FK",
  },

  EMPLOYEE: {
    Employee_Id: "PK",
    Employee_Name: "VARCHAR",
    Employee_Speciality: "VARCHAR",
  },
};

export default relationalDiagram;

console.log(relationalDiagram.ROOM); //we can test any entity ( Room- Employee-Category-Hotel-Type)
