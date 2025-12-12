import React from "react";

export default function UpdateService() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update Service</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              {/* service_name */}
              <label className="label">service_name</label>
              <input type="text" className="input" placeholder="service_name" />

              {/* service category */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">service category</legend>
                <select defaultValue="Pick a browser" className="select">
                  <option disabled={true}>Pick a category</option>
                  <option>Chrome</option>
                  <option>FireFox</option>
                  <option>Safari</option>
                </select>
              </fieldset>

              {/* description */}
              <label className="label">Description</label>
              <textarea
                className="textarea"
                placeholder="Description"
              ></textarea>

              {/* cost */}
              <label className="label">cost</label>
              <input type="number" className="input" placeholder="cost" />

              {/* Unit */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Unit</legend>
                <select defaultValue="Pick a browser" className="select">
                  <option disabled={true}>Pick a Unit</option>
                  <option>Chrome</option>
                  <option>FireFox</option>
                  <option>Safari</option>
                </select>
              </fieldset>

              {/* created by email */}
              <label className="label">creted by </label>
              <input type="email" className="input" placeholder="email" />

              <button className="btn btn-neutral mt-4">Update Service</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
