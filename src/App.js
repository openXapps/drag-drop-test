import React from 'react';

const buildBody = () => {
  let body = {
    field1: 'this is field one',
    field2: 'this is field two'
  };
  return JSON.stringify(body);
};

function App() {
  const subject = encodeURIComponent('Hello World');
  const body = encodeURIComponent(buildBody());

  const allowDrop = (ev) => {
    ev.preventDefault();
  }

  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    if (ev.target.id) ev.target.appendChild(document.getElementById(data));
  }

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between mt-5">
        <div className="border p-3" style={{ width: "350px" }} onDrop={drop} onDragOver={allowDrop} id="zone-1">
          <h4>New</h4>
          <div className="card my-draggable" id="el-1" draggable="true" onDragStart={drag}>
            <div className="card-body">
              <h5 className="card-title">Rebuild Remedy Server</h5>
              <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-outline-primary" type="button">Open</button>
              <button className="btn btn-outline-primary ml-2" type="button">Delete</button>
              <a
                className="btn btn-primary ml-2"
                href={`mailto:?to=&subject=${subject}&body=${body}`}
              >Email</a>
            </div>
          </div>
        </div>
        <div className="border p-3" style={{ width: "350px" }} onDrop={drop} onDragOver={allowDrop} id="zone-2">
          <h4>Work In Progress</h4>
        </div>
        <div className="border p-3" style={{ width: "350px" }} onDrop={drop} onDragOver={allowDrop} id="zone-3">
          <h4>Complete</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
