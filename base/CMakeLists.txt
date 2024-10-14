cmake_minimum_required(VERSION 3.5.0)
project(base VERSION 0.1.0 LANGUAGES C CXX)

file (GLOB source_files "${PROJECT_SOURCE_DIR}/src/*.cpp")

add_executable(base ${source_files})

