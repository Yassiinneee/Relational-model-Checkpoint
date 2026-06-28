# Relational Model Checkpoint

## 📌 Project Overview

This project presents the **Relational Model (RLM)** for a Hotel Management System. It transforms an Entity-Relationship Model (ERM) into a structured relational database schema by defining tables, attributes, primary keys, foreign keys, and relationships between entities.

The project demonstrates fundamental database design principles, including normalization, referential integrity, and relationship mapping.

---

## 📖 Project Objectives

- Convert an Entity-Relationship Diagram (ERD) into a Relational Model.
- Define entities as database tables.
- Assign Primary Keys (PK) and Foreign Keys (FK).
- Model One-to-Many (1:M) relationships.
- Prepare the database structure for SQL implementation.

---

## 📂 Project Structure

```
Relational-model-Checkpoint/
│
├── RLM.txt                  # Description of entities, attributes, and relationships
├── RLMdiagram.js            # Relational model represented as JavaScript objects
├── RLMdiagram.sql           # Relational schema (Mermaid ER Diagram format)
├── Relational-digram.png    # Visual representation of the relational model
└── README.md                # Project documentation
```

---

## 🗄️ Database Schema

The relational model contains the following tables:

| Table | Description |
|--------|-------------|
| **TYPE** | Stores hotel types (Luxury, Resort, Business, etc.). |
| **HOTEL** | Stores hotel information and references its type. |
| **CATEGORY** | Defines room categories, pricing, and bed capacity. |
| **ROOM** | Represents hotel rooms linked to hotels and categories. |
| **EMPLOYEE** | Stores employee information associated with hotels. |

---

## 🧩 Entity Relationships

The database follows these relationships:

```
TYPE (1) ──────────────── (M) HOTEL

HOTEL (1) ─────────────── (M) ROOM

CATEGORY (1) ──────────── (M) ROOM

HOTEL (1) ─────────────── (M) EMPLOYEE
```

---

## 🏗️ Main Entities

### TYPE

| Attribute | Key | Description |
|-----------|-----|-------------|
| Type_Id | PK | Unique identifier |
| Type_Name | | Hotel classification |

---

### HOTEL

| Attribute | Key | Description |
|-----------|-----|-------------|
| Hotel_Id | PK | Unique hotel identifier |
| Hotel_Name | | Hotel name |
| Type_Id | FK | References TYPE |

---

### CATEGORY

| Attribute | Key | Description |
|-----------|-----|-------------|
| Category_Id | PK | Unique category identifier |
| Category_Name | | Room category |
| Price | | Room price |
| Beds_numbers | | Number of beds |

---

### ROOM

| Attribute | Key | Description |
|-----------|-----|-------------|
| Room_Id | PK | Unique room identifier |
| Floor | | Floor number |
| Hotel_Id | FK | References HOTEL |
| Category_Id | FK | References CATEGORY |

---

### EMPLOYEE

| Attribute | Key | Description |
|-----------|-----|-------------|
| Employee_Id | PK | Unique employee identifier |
| Employee_Name | | Employee full name |
| Employee_Speciality | | Employee role |
| Hotel_Id | FK | References HOTEL |

---

## 🔑 Primary Keys

- Type_Id
- Hotel_Id
- Category_Id
- Room_Id
- Employee_Id

---

## 🔗 Foreign Keys

| Foreign Key | References |
|-------------|------------|
| Hotel.Type_Id | TYPE(Type_Id) |
| Room.Hotel_Id | HOTEL(Hotel_Id) |
| Room.Category_Id | CATEGORY(Category_Id) |
| Employee.Hotel_Id | HOTEL(Hotel_Id) |

---

## 🛠️ Technologies Used

- Relational Database Modeling
- SQL Schema Design
- JavaScript Object Representation
- Mermaid ER Diagram Syntax

---

## 📊 Database Design Principles

The relational model has been designed to:

- Maintain referential integrity.
- Eliminate redundant data.
- Improve consistency across related tables.
- Support efficient querying through normalized structures.
- Provide a scalable foundation for future database implementation.

---

## 🚀 How to Use

1. Review the relational model documentation in **RLM.txt**.
2. Examine the database structure using **RLMdiagram.sql**.
3. Explore the JavaScript representation in **RLMdiagram.js**.
4. Visualize the schema using **Relational-digram.png**.
5. Implement the schema in any SQL-compatible relational database.

---

## 📚 Learning Outcomes

Through this checkpoint, the following concepts are demonstrated:

- Relational Database Design
- Entity-to-Table Mapping
- Primary and Foreign Key Implementation
- One-to-Many Relationships
- Database Normalization
- Referential Integrity
- SQL Schema Planning

---

## 📸 Relational Diagram

The project includes a complete relational diagram illustrating:

- Database tables
- Primary keys
- Foreign keys
- Entity relationships
- Cardinalities

Refer to:

```
Relational-digram.png
```

---

## 🎯 Conclusion

This project provides a well-structured relational model for a Hotel Management System by translating conceptual entities into normalized database tables. It establishes clear relationships using primary and foreign keys while following relational database best practices. The resulting schema is organized, scalable, and ready for implementation in SQL-based database management systems.

---

## 👨‍💻 Author

**Yassine Kaltoum**

Database Design & Relational Modeling Checkpoint
