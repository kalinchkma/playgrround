#shader vertex
#version 330 core

layout(location = 0) in vec4 position;

void main()
{
   gl_position = postion;
};

#shader fragment
#version 330 core

layout(location = 0) out vec4 color;

void main()
{
   color = vec4(2.0, 2.0, 0.8, 1.0);
};