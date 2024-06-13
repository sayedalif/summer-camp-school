import { useForm } from "react-hook-form";
import DragAndDrop from "../../components/DragAndDrop";

const AddClass = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  console.log(watch("className")); // watch input value by passing the name of it

  return (
    // react-hook-form
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* grid grid-rows-7 grid-cols-2 gap-5 */}
      <div className="mb-4 mx-3">

        {/* class Name */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Class name</span>
          </div>
          <input type="text" placeholder="Class name" className="input md:input-md sm:input-sm input-sm input-bordered"
            {...register("className", { required: true })}
          />
        </label>
        {/* category */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Photography category</span>
          </div>
          <input type="text" placeholder="Class name" className="input md:input-md sm:input-sm input-sm input-bordered"
            {...register("category", { required: true })}
          />
        </label>
        {/* price */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Price(USD)</span>
          </div>
          <input type="text" placeholder="Class name" className="input md:input-md sm:input-sm input-sm input-bordered"
            {...register("price", { required: true })}
          />
        </label>
        {/* available seats */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Available seats</span>
          </div>
          <input type="text" placeholder="Class name" className="input md:input-md sm:input-sm input-sm input-bordered"
            {...register("available_seats", { required: true })}
          />
        </label>
        {/* video length */}
        <label className="form-control col-span-2">
          <div className="label">
            <span className="label-text">Video length(IN HOURS)</span>
          </div>
          <input type="text" placeholder="Class name" className="input lg:input-lg md:input-md sm:input-sm input-sm input-bordered"
            {...register("video_length", { required: true })}
          />
        </label>


        <div className="lg:flex md:flex md:flex-row lg:justify-evenly md:justify-between sm:flex sm:flex-col sm:justify-center">
          {/* upload video */}
          <label className="form-control col-span-2">
            <div className="label">
              <span className="label-text">Upload video</span>
            </div>
            <DragAndDrop></DragAndDrop>
          </label>

          {/* upload class thumbnail */}
          <label className="form-control col-span-2">
            <div className="label">
              <span className="label-text">Class thumbnail</span>
            </div>
            <DragAndDrop></DragAndDrop>
          </label>
        </div>

        {/* description */}
        <label className="form-control row-start-3 row-end-5 col-span-2 order-last">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea className="textarea textarea-bordered w-full h-[150px]" placeholder="Description" {...register("description", { required: true })} />
        </label>

      </div>

      <div className="text-center mb-3">
        <input className="btn btn-primary w-1/2 text-white" type="submit" />
      </div>
    </form>
  );
};

export default AddClass;
