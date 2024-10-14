cmake_minimum_required(VERSION 3.5.0)
project(gang VERSION 0.1.0 LANGUAGES C CXX)

file (GLOB source_files "${PROJECT_SOURCE_DIR}/src/*.cpp")

add_executable(gang ${source_files})

find_package(glfw3 REQUIRED)
find_package(OpenGL REQUIRED)
find_package(GLEW REQUIRED)

target_link_libraries(${PROJECT_NAME} glfw OpenGL::GL GLEW::GLEW )

# Set the working directory
set_target_properties(gang PROPERTIES
    RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}
    VS_DEBUGGER_WORKING_DIRECTORY "${PROJECT_SOURCE_DIR}"
)