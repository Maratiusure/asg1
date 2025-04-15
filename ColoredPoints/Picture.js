class Picture {
    constructor() {
        this.type = "picture";
        this.triangles = [
            {
                vertices: [[-1.0, 1.0], [-1.0, 0.2], [1.0, 1.0]],
                color: [0.53, 0.81, 0.98, 1.0]
            },
            {
                vertices: [[-1.0, 0.2], [1.0, 1.0], [1.0, 0.2]],
                color: [0.53, 0.81, 0.98, 1.0]
            },

            {
                vertices: [[-1.0, 0.2], [-1.0, -1.0], [1.0, 0.2]],
                color: [0.0, 0.81, 0.55, 1.0]
            },

            {
                vertices: [[-1.0, -1.0], [1.0, 0.2], [1.0, -1.0]],
                color: [0.0, 0.81, 0.55, 1.0]
            },

            { 
                vertices: [[1.0, 1.0], [0.7, 1.0], [0.80, 0.80]],
                color: [1.0, 1.0, 0.0, 1.0]
            },
            { 
                vertices: [[1.0, 1.0], [0.80, 0.80], [1.0, 0.75]],
                color: [1.0, 1.0, 0.0, 1.0]
            },

            { 
                vertices: [[-1.0, 0.2], [-0.5, 0.2], [-0.75, 0.8]],
                color: [0.55, 0.27, 0.07, 1.0]
            },

            { 
                vertices: [[-0.5, 0.2], [0.0, 0.2], [-0.25, 0.8]],
                color: [0.55, 0.27, 0.07, 1.0]
            },

            { 
                vertices: [[1.0, 0.2], [0.5, 0.2], [0.75, 0.8]],
                color: [0.55, 0.27, 0.07, 1.0]
            },

            { 
                vertices: [[0.5, 0.2], [0.0, 0.2], [0.25, 0.8]],
                color: [0.55, 0.27, 0.07, 1.0]
            },

            { 
                vertices: [[-0.75, 0.2], [-0.5, 0.65], [-0.25, 0.2]],
                color: [0.55, 0.27, 0.07, 1.0]
            },

            { 
                vertices: [[0.75, 0.2], [0.5, 0.65], [0.25, 0.2]],
                color: [0.55, 0.27, 0.07, 1.0]
            },

            { 
                vertices: [[-0.25, 0.2], [0.0, 0.70], [0.25, 0.2]],
                color: [0.55, 0.27, 0.07, 1.0]
            },

            { 
                vertices: [[0.25, -0.5], [0.25, -0.75], [0.75, -0.5]],
                color: [0.5, 0.5, 0.5, 1.0]
            },

            { 
                vertices: [[0.25, -0.75], [0.75, -0.5], [0.75, -0.75]],
                color: [0.5, 0.5, 0.5, 1.0]
            },

            { 
                vertices: [[0.25, -0.5], [0.26, -0.40], [0.5, -0.5]],
                color: [0.5, 0.5, 0.5, 1.0]
            },

            { 
                vertices: [[0.26, -0.40], [0.35, -0.30], [0.5, -0.5]],
                color: [0.5, 0.5, 0.5, 1.0]
            },

            { 
                vertices: [[0.35, -0.30], [0.5, -0.25], [0.5, -0.5]],
                color: [0.5, 0.5, 0.5, 1.0]
            },

            { 
                vertices: [[0.5, -0.25], [0.65, -0.30], [0.5, -0.5]],
                color: [0.5, 0.5, 0.5, 1.0]
            },

            { 
                vertices: [[0.65, -0.30], [0.74, -0.40], [0.5, -0.5]],
                color: [0.5, 0.5, 0.5, 1.0]
            },

            { 
                vertices: [[0.74, -0.40], [0.75, -0.50], [0.5, -0.5]],
                color: [0.5, 0.5, 0.5, 1.0]
            },

            { 
                vertices: [[0.45, -0.55], [0.45, -0.75], [0.55, -0.75]],
                color: [1.0, 1.0, 0.0, 1.0]
            },

            { 
                vertices: [[0.45, -0.55], [0.55, -0.55], [0.55, -0.75]],
                color: [1.0, 1.0, 0.0, 1.0]
            }
        ]
    }

    render() {
        for (let i of this.triangles) {
            gl.uniform4f(u_FragColor, ...i.color);
            drawPicture(i.vertices[0], i.vertices[1], i.vertices[2]);
        }
    }
}

function drawPicture(p1, p2, p3) {

    let vertices = new Float32Array([
        p1[0], p1[1],
        p2[0], p2[1],
        p3[0], p3[1],
    ]);

    var n = 3; // The number of vertices

    // Create a buffer object
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }

    // Bind the buffer object to target
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    // Write date into the buffer object
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    //gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Assign the buffer object to a_Position variable
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

    // Enable the assignment to a_Position variable
    gl.enableVertexAttribArray(a_Position);

    gl.drawArrays(gl.TRIANGLES, 0, n);
    // return n;
}