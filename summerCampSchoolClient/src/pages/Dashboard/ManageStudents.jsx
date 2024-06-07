import React from 'react';

const ManageStudents = () => {
  // * i want to create manage students in all the classes for admin. which will show the admin which students are enrolled in which classes.

  // i have users collection in mongodb.
  // and i have classes collection in classes, also i have payment collection in mongodb, which stores payment details and classes_id inside an array.
  // payment hold the class collection each class _id in classes_id.

  // todo: action plan to accomplish my steps:
  // create a pipeline that will take all the payment collection and find all the classes_id that are in the classes_id array.
  // then the classes_id will be used to find the classes in the classes collection.
  // whoever has the class_id has paid for the class so then i will take his email and show it in the manage students for admin.
  return (
    <div>

    </div>
  );
};

export default ManageStudents;