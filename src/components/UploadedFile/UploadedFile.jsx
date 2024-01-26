import { useState } from 'react';
import PropTypes from 'prop-types';
import './UploadedFile.css';
import closeicon from "../../assets/close.svg"

export default function UploadedFile({ data }) {
    const [selectedTags, setSelectedTags] = useState({}); 


  const handleTagChange = (index, selectedTag) => {
    setSelectedTags((prevSelectedTags) => ({
      ...prevSelectedTags,
      [index]: [...(prevSelectedTags[index] || []), selectedTag], // Update tags for specific file
    }));
  };

  const handleRemoveTag = (index, tagToRemove) => {
    setSelectedTags((prevSelectedTags) => ({
      ...prevSelectedTags,
      [index]: prevSelectedTags[index].filter((tag) => tag !== tagToRemove),
    }));
  };

  return (
    <div className="uploaded-file-container">
      <h3 className="uploaded-file-text">Uploads</h3>
      <div className="table-container">
        <table className="uploaded-table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Links</th>
              <th>Prefix</th>
              <th>Add Tags</th>
              <th>Selected Tags</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el, index) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.links}</td>
                <td>{el.prefix}</td>
                <td>
                  <select
                    value={index} 
                    onChange={(e) => handleTagChange(index, e.target.value)}
                    style={{
                        borderRadius: '5px',
                        padding: '8px 12px',
                        backgroundColor: '#fff',
                      }}
                  >
                    {el['select tags'].split(',').map((tag, tagIndex) => ( 
                      <option key={tagIndex} value={tag.trim()}>
                        {tag.trim()}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                    <div className='selected-main-container'>
                        {selectedTags[index]?.map((tag, tagIndex) => (
                            <span key={tagIndex} className='selected-tag-container'>{tag}<img src={closeicon} className='close-icon-img' onClick={() => handleRemoveTag(index, tag)}/></span>
                        ))}
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

UploadedFile.propTypes = {
  error: PropTypes.string,
  data: PropTypes.array,
};