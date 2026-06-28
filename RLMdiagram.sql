erDiagram
    TYPE ||--o{ HOTEL : "1:M"
    HOTEL ||--o{ ROOM : "1:M"
    CATEGORY ||--o{ ROOM : "1:M"
    HOTEL ||--o{ EMPLOYEE : "1:M"

    TYPE {
        INT Type_Id PK
        VARCHAR Type_Name
    }

    HOTEL {
        INT Hotel_Id PK
        VARCHAR Hotel_Name
        INT Type_Id FK
    }

    CATEGORY {
        INT Category_Id PK
        VARCHAR Category_Name
        DECIMAL Price
        INT Beds_numbers
    }

    ROOM {
        INT Room_Id PK
        INT Floor
        INT Hotel_Id FK
        INT Category_Id FK
    }

    EMPLOYEE {
        INT Employee_Id PK
        VARCHAR Employee_Name
        VARCHAR Employee_Speciality
    }
