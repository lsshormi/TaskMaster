# TaskMaster - Todo Application

TaskMaster is a full-stack Todo application that enables users to efficiently manage their tasks. The project utilizes React.js for the frontend and Django with REST API for the backend.

## Features

- **Task Management**: Create, edit, complete, and delete tasks seamlessly.
- **User-Friendly Interface**: Intuitive and responsive design for an enhanced user experience.
- **Persistent Data**: Utilizes Django models to store tasks persistently in a relational database.
- **RESTful API**: Implements a RESTful API to handle CRUD operations on tasks.
- **Error Handling**: Provides meaningful error messages for improved debugging.

## Technologies Used

- **Frontend**: React.js, Axios for API requests.
- **Backend**: Django, Django REST Framework.
- **Database**: SQLite for development, can be easily switched to other databases.
- **Version Control**: Git, GitHub for repository management.

## Installation

1. **Clone Repository**: `git clone https://github.com/lsshormi/TaskMaster.git`
2. **Frontend Setup**:
    - Navigate to the `frontend` directory: `cd frontend`
    - Install dependencies: `npm install`
    - Start the development server: `npm start`
3. **Backend Setup**:
    - Navigate to the `backend` directory: `cd backend`
    - Create a virtual environment: `python -m venv env`
    - Activate the virtual environment:
        - On Windows: `env\Scripts\activate`
        - On macOS/Linux: `source env/bin/activate`
    - Install dependencies: `pip install -r requirements.txt`
    - Apply migrations: `python manage.py migrate`
    - Run the development server: `python manage.py runserver`

## Usage

- Access the Todo application by visiting `http://localhost:3000/` in your browser.
- Create a new task, mark it as complete, edit its title, or delete it.
- Explore the intuitive interface for efficient task management.

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -m 'Add my feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
