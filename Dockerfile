# Use an official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install AWS CLI and jq
RUN apt-get update && \
    apt-get install -y awscli jq && \
    apt-get clean

# Define build arguments
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_REGION

# Set environment variables for AWS CLI
# ENV AWS_ACCESS_KEY_ID=${env.AWS_ACCESS_KEY_ID}
# ENV AWS_SECRET_ACCESS_KEY=${env.AWS_SECRET_ACCESS_KEY}
# ENV AWS_DEFAULT_REGION='us-east-1'

# Configure AWS CLI
# RUN aws configure set aws_access_key_id ${AWS_ACCESS_KEY_ID} && \
#     aws configure set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY} && \
#     aws configure set region ${AWS_DEFAULT_REGION}

# Fetch secrets and store them in .env
RUN aws secretsmanager get-secret-value --secret-id env-test --region us-east-1 | \
    jq -r '.SecretString | fromjson | to_entries | .[] | "\(.key)=\(.value)"' > .env && \
    cat .env

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 1400

# Start the application using dotenv to load environment variables
CMD ["node", "index.js"]
