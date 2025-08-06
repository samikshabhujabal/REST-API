
Technology

🚀 Backend
Spring Boot – Fast REST API development

Spring MVC – Request handling (controllers)

Spring Data JPA – Easy database access

Hibernate – ORM for mapping Java objects to DB

PostgreSQL – Relational database

✅ Core Frontend Tech
HTML – Page structure


CSS / Bootstrap / Tailwind – Styling

JavaScript – Logic & interactivity

Axios / Fetch – Call REST API


Features:

1.Student Registration – Add, update, or delete student profiles.

2.Course Management – Assign or remove students from courses.

3.Attendance Tracking – Mark and monitor daily attendance.

4.Grade Management – Record and display exam results/grades.

5.Fee Management – Track fee payments and dues.

6.Timetable Scheduling – Manage class schedules and timetables.

7.Login & Authentication – Secure login for admin, students, and teachers.

8.Notifications – Send alerts for announcements, exams, or dues.

9.Reports Generation – Generate attendance, performance, and fee reports.

10.Search & Filter – Easily find students, courses, or records.


Project Structure:

student-management-api/
│
├── src/

│   └── main/

│       ├── java/

│       │   └── com/

│       │       └── example/

│       │           └── studentmanagement/

│       │               ├── controller/   

│       │               │   └── StudentController.java

│       │               │   └── CourseController.java

│       │               │   └── AuthController.java
│       │
│       │               ├── service/   

│       │               │   └── StudentService.java

│       │               │   └── CourseService.java
│       │
│       │               ├── repository/     

│       │               │   └── StudentRepository.java

│       │               │   └── CourseRepository.java
│       │
│       │               ├── model/

│       │               │   └── Student.java

│       │               │   └── Course.java
│       │
│       │               ├── dto/   

│       │               │   └── StudentDTO.java

│       │               │   └── CourseDTO.java

│       │               │   └── AuthRequest.java

│       │               │   └── AuthResponse.java
│       │
│       │               ├── mapper/             

│       │               │   └── StudentMapper.java
│       │
│       │               ├── config/           

│       │               │   └── SecurityConfig.java

│       │               │   └── SwaggerConfig.java
│       │
│       │               ├── exception/        

│       │               │   └── GlobalExceptionHandler.java

│       │               │   └── ResourceNotFoundException.java
│       │
│       │               └── StudentManagementApplication.java
│
│       └── resources/

│           ├── application.properties  

│           ├── data.sql / schema.sql  

├── pom.xml 

└── README.md


✅ pom.xml Dependencies:

    <?xml version="1.0" encoding="UTF-8"?>

    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-                  instance"
 	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0    https://maven.apache.org/xsd/maven-4.0.0.xsd">
 	    <modelVersion>4.0.0</modelVersion>
    <parent>
	   	<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.5.4</version>
		<relativePath/> 

	</parent>
	<groupId>com.student</groupId>
	<artifactId>StudentManagementSystem</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>StudentManagementSystem</name>
	<description>Demo project for Spring Boot</description>
	<url/>
	<licenses>
		<license/>
	</licenses>
	<developers>
		<developer/>
	</developers>
	<scm>
		<connection/>
		<developerConnection/>
		<tag/>
		<url/>
	</scm>
	<properties>
		<java.version>21</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
       	</build>

              </project>





 Frontend:

<img width="1749" height="972" alt="Screenshot 2025-08-05 194748" src="https://github.com/user-attachments/assets/1445fb93-8faf-45bd-b4cb-f7f34f0d6684" />



Backend:
<img width="970" height="874" alt="Screenshot 2025-08-04 161210" src="https://github.com/user-attachments/assets/f5e8f1c5-6b33-469b-b71d-943588d49bc5" />


