import React from 'react';
import { Formik, Field, Form } from 'formik';

const Goal = () => (
  <div>
    <h1>New Goal</h1>
    <Formik
      initialValues={{
        goalDescription: '',
        measurement: '',
        duration: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert("New Goal Added!");
      }}
    >
      <Form>
        <label htmlFor="goalDescription">Goal Description</label>
        <Field id="goalDescription" name="goalDescription" placeholder="Practice Piano" />

        <label htmlFor="measurement">Measurement</label>
        <Field id="measurement" name="measurement" placeholder="30 minutes per day" />

        <label htmlFor="duration">Duration</label>
        <Field
          id="duration"
          name="duration"
          placeholder="30 days"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Goal;
