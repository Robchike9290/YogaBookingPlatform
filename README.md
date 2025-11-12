# Yoga Booking Platform

A modern full-stack yoga booking platform built with Next.js, React, TypeScript, and Java Spring Boot.

## Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **NextAuth.js** - Authentication
- **Jest** - Testing framework

### Backend

- **Java 17** - Programming language
- **Spring Boot 3.2** - Framework
- **Spring Security** - Security
- **Spring Data JPA** - Data persistence
- **H2 Database** - In-memory database for development

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Java 17+
- Maven 3.6+

### Frontend Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup

1. Run the Spring Boot application:

```bash
mvn spring-boot:run
```

2. The API will be available at [http://localhost:8080](http://localhost:8080)

3. H2 Database Console: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)

### Available Endpoints

- `GET /api/hello` - Hello world endpoint
- `GET /api/health` - Health check endpoint

### Testing

Run frontend tests:

```bash
npm test
```

Run backend tests:

```bash
mvn test
```

## Project Structure

```
├── src/                    # Next.js frontend
│   ├── app/               # App Router pages
│   ├── components/        # React components
│   ├── lib/              # Utility libraries
│   └── styles/           # CSS files
├── src/main/java/         # Java backend
│   └── com/yogabooking/platform/
│       ├── controller/    # REST controllers
│       └── config/       # Configuration classes
├── src/test/java/         # Java tests
└── pom.xml               # Maven configuration
```

## Features

- ✅ Modern React with TypeScript
- ✅ TailwindCSS styling
- ✅ NextAuth.js integration ready
- ✅ Jest testing setup
- ✅ Spring Boot REST API
- ✅ CORS configuration
- ✅ Health check endpoints
- ✅ In-memory H2 database
  A yoga booking platform with a React/TS frontend and Java backend based around NextJS.
