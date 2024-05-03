import DragAndDrop from '../components/DragAndDrop';

const AddClass = () => {
  return (
    // flex sm:flex-col flex-col justify-center items-center h-screen
    <div className="">
      {/* grid grid-rows-7 grid-cols-2 gap-5 */}
      <div className="grid grid-rows-7">
        {/* class Name */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Class name</span>
          </div>
          <input type="text" placeholder="Class name" className="input md:input-md sm:input-sm input-sm input-bordered" />
        </label>
        {/* category */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Category</span>
          </div>
          <input type="text" placeholder="Class name" className="input md:input-md sm:input-sm input-sm input-bordered" />
        </label>
        {/* price */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Price</span>
          </div>
          <input type="text" placeholder="Class name" className="input md:input-md sm:input-sm input-sm input-bordered" />
        </label>
        {/* available seats */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Available seats</span>
          </div>
          <input type="text" placeholder="Class name" className="input md:input-md sm:input-sm input-sm input-bordered" />
        </label>
        {/* video length */}
        <label className="form-control col-span-2">
          <div className="label">
            <span className="label-text">Video length</span>
          </div>
          <input type="text" placeholder="Class name" className="input lg:input-lg md:input-md sm:input-sm input-sm input-bordered" />
        </label>
        {/* video link */}
        {/* <label className="form-control">
          <div className="label">
            <span className="label-text">Video link</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered" />
        </label> */}
        {/* class thumbnail */}
        {/* <label className="form-control">
          <div className="label">
            <span className="label-text">Class thumbnail</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered" />
        </label> */}
        <div>
          <DragAndDrop text={`upload video`} fileType={`video`}></DragAndDrop>

          <DragAndDrop text={`upload thumbnail`} fileType={`image`}></DragAndDrop>
        </div>
        {/* description */}
        <label className="form-control row-start-3 row-end-5 col-span-2 order-last">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered h-full w-full" />
        </label>
      </div>
    </div>
  );
};

export default AddClass;
