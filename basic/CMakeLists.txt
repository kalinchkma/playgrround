# Minimum CMake version
cmake_minimum_required(VERSION 3.25)

# Project name
project(basic VERSION 0.1 LANGUAGES CXX)

# Specify the c++ Standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED true)

# Define source file
file(GLOB source_files "${PROJECT_SOURCE_DIR}/src/*.cpp")

# Add source files
add_executable(basic ${source_files})