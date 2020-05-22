import React from 'react';
import { Gallery } from '../types';
import { cleanerApi } from '../../../../controller/api';

type Props = {
  value: Gallery[];
  setValue: React.Dispatch<React.SetStateAction<Gallery[]>>;
};

const InputGallery: React.FunctionComponent<Props> = ({
  value,
  setValue
}) => {
  const addImage = async (imageUrl: any) => {
    const response = await cleanerApi.gallery({
      format: 'png',
      url: imageUrl
    });

    setValue((prevState: Gallery[]) => ([...prevState, response.data.path]));
    console.log('response', response.data.path);
  };

  const uploadImagesWithComp = async (e: Blob) => {
    const imageDataUrl = await readFile(e);
    addImage(imageDataUrl);
  };

  const readFile = (image: Blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(image);
    });
  }
  
  return (
    <div className="row">
      <div className="col">
        {
        value && value.map((item) => 
          <img
              style={{width: "100px", height: "100px", marginLeft: ".75em"}}
              src={item}
              alt="..."
          />)
        }
        <label className="btn btn-secondary btn-block mt-1">
          <span>Upload Image</span>
          <input
            type="file"
            className="d-none"
            onChange={ (e: any) => {
              uploadImagesWithComp(e.target.files[0]);
            } }
          />
        </label>
      </div>
    </div>
  );
}

export default InputGallery;
