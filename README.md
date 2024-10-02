The portfolio is live and hosted on an AWS EC2 instance. You can access it using this URL:


http://13.60.249.101










Portfolio React Application
This is a personal portfolio website built using React and deployed with Docker. It showcases projects, skills, and other professional details in an elegant and responsive design.

Features
Responsive design
Showcases projects, skills, and personal information
Deployed on AWS EC2 instance
Containerized using Docker
Technologies Used
React.js
Node.js
Nginx (for serving the build)
Docker (for containerization)
AWS EC2 (for cloud deployment)
Vite (for faster development and build tool)
Getting Started
Prerequisites
Make sure you have the following installed on your machine:

Node.js
Docker
AWS CLI (for AWS deployment)
EC2 Instance Setup
Local Development
To run the project locally, follow these steps:

Clone the repository:


git clone https://github.com/prathvish/portfolio-app.git
cd portfolio-app
Install dependencies:


npm install
Run the project locally using Vite:


npm run dev
Open your browser and navigate to:


http://localhost:3000

Building and Running with Docker
You can also build and run the project using Docker.

Build the Docker image:


docker build -t prathvish/portfolio-app:latest .
Run the Docker container:


docker run -p 8080:80 prathvish/portfolio-app:latest

Open your browser and navigate to:

http://localhost:8080


Pushing Docker Image to Docker Hub
You can push the built Docker image to Docker Hub for others to pull and run.

Log in to Docker Hub:


docker login
Push the Docker image to your Docker Hub repository:

docker push prathvish/portfolio-app:latest
Running the App from Docker Hub
Others can pull and run your Docker image directly from Docker Hub:

Pull the image:


docker pull prathvish/portfolio-app:latest
Run the container:


docker run -p 8080:80 prathvish/portfolio-app:latest

Deploying on AWS EC2
The portfolio application is also deployed on an AWS EC2 instance. You can access it via the public IP address of the EC2 instance.

Steps to Deploy on AWS EC2:
Launch an EC2 instance:

Use Amazon Linux or Ubuntu.
Make sure the instance has access to the internet and security group rules allow HTTP (port 80) traffic.
Install Docker on EC2:

Connect to your EC2 instance and run:


sudo yum update -y  # for Amazon Linux
sudo yum install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user  # allows ec2-user to run Docker commands without sudo
For Ubuntu, replace yum with apt-get.

Pull the Docker Image:


docker pull prathvish/portfolio-app:latest
Run the Docker container:


docker run -d -p 80:80 prathvish/portfolio-app:latest
Access the Application:

Go to your browser and enter the public IP of your EC2 instance.
The portfolio should be accessible.
Access the Live Website
