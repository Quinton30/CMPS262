# Student Management API

A simple Node.js and PostgreSQL API for managing student records.

---

## Project Structure

### Installation

1. **Clone the repository**:
    ```sh
    git clone <repo-url>
    cd <project-folder>
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Configure the database connection** in `db.js`:
    ```javascript
    const pool = new Pool({
         user: 'your_username',
         host: 'your_host',
         database: 'your_database',
         password: 'your_password',
         port: 5432 // Change if needed
    });
    ```

4. **Start the server**:
    ```sh
    node server.ja
    ```

---

## API Endpoints

- **GET** `/api/v1/students` - Retrieve students  

---

## Technologies Used

- **Node.js** (Express.js)  
- **PostgreSQL** (pg library)  

---

## License

This project is open-source. Feel free to modify and contribute! 🚀
