import React from 'react';
// import { userApi } from '../../../controller/api';
// import { AxiosResponse } from 'axios';
import useFormState from './hooks/useFormState';
import InputName from './InputName';
import InputDescription from './InputDescription';
import InputGallery from './InputGallery';
import ServiceList from './ServiceList';
import { cleanerApi } from '../../../controller/api';
import getToken from '../../../scripts/localStorage/getToken';

const FormCleaner: React.FunctionComponent = () => {
  const state = useFormState();

  const handleClick = () => {
    if (state.name.length !== 0) {
      cleanerApi.addCleaner({
        token: String(getToken()),
        cleaner: {
          name: state.name,
          description: state.description,
          gallery: state.gallery,
          services: state.services
        }
      }).then((response) => {
        console.log(response)
      });
    }
  }

  return (
    <form
      className="col-12 col-md-8 col-lg-6 col-xl-4"
    >
      <div className="form-group">
        <label>Name</label>
        <InputName
          value={ state.name }
          setValue={ state.setName }
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <InputDescription
          value={ state.description }
          setValue={ state.setDescription }
        />
      </div>

      <div className="form-group">
        <label>Gallery</label>
        <InputGallery
          value={ state.gallery }
          setValue={ state.setGallery }
        />
      </div>

      <div className="form-group">
        <label>Services</label>
        <ServiceList
          value={ state.services }
          setValue={ state.setServices }
        />
      </div>

      <div className="row text-center">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={ handleClick }
          >
            Add cleaner
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormCleaner;
