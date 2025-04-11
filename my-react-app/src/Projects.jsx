import React from 'react';
 
function Projects() {
  return (
<section id="projects" className="py-5 bg-dark">
<div className="container">
<h2 className="mb-4">Projects</h2>
<div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Project Card 1 */}
<div className="col">
<div className="card h-100 shadow-sm">
<img src="project1.jpg" className="card-img-top" alt="Project 1" />
<div className="card-body">
<h5 className="card-title">Project One</h5>
<p className="card-text">A brief description of the project goes here.</p>
<a href="#" className="btn btn-primary">View Project</a>
</div>
</div>
</div>
          {/* Project Card 2 */}
<div className="col">
<div className="card h-100 shadow-sm">
<img src="project2.jpg" className="card-img-top" alt="Project 2" />
<div className="card-body">
<h5 className="card-title">Project Two</h5>
<p className="card-text">A brief description of the project goes here.</p>
<a href="#" className="btn btn-primary">View Project</a>
</div>
</div>
</div>
          {/* Project Card 3 */}
<div className="col">
<div className="card h-100 shadow-sm">
<img src="project3.jpg" className="card-img-top" alt="Project 3" />
<div className="card-body">
<h5 className="card-title">Project Three</h5>
<p className="card-text">A brief description of the project goes here.</p>
<a href="#" className="btn btn-primary">View Project</a>
</div>
</div>
</div>
          {/* Add more project cards as needed */}
</div>
</div>
</section>
  );
}
 
export default Projects;