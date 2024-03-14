import React from 'react';

const AddClass = () => {
  return (
    <div className='grid grid-cols-2'>
      {/* class Name */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Class name</span>
        </div>
        <input type="text" placeholder="Class name" className="input input-bordered w-full max-w-xs" />
      </label>
      {/* category */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Category</span>
        </div>
        <input type="text" placeholder="Category" className="input input-bordered w-full max-w-xs" />
      </label>
      {/* price */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Price</span>
        </div>
        <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
      </label>
      {/* available seats */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Available seats</span>
        </div>
        <input type="text" placeholder="Seats" className="input input-bordered w-full max-w-xs" />
      </label>
      {/* video length */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Video length</span>
        </div>
        <input type="text" placeholder="Length" className="input input-bordered w-full max-w-xs" />
      </label>
      {/* video link */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">video link</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      {/* class thumbnail */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">class thumbnail</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      {/* description */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">description</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
    </div>
  );
};

export default AddClass;