import { useState } from "react";
import { tagsArray } from "../../db";
import useEmployeeStore from "../../employeeStore";

export default function Tags() {
    const employee = useEmployeeStore((state) => state.employee);
    const [selectedTags, setSelectedTags] = useState([]);
    
    const pushTagToArray = (clickedTag) => {
        const updatedTagsLong = [...employee.tagsLong];
        
        if (updatedTagsLong.includes(clickedTag)) {
          // Remove the tag if it is already included
          updatedTagsLong.splice(updatedTagsLong.indexOf(clickedTag), 1);
        } else {
          // Add the tag if it is not included
          updatedTagsLong.push(clickedTag);
        }
      
        // Update the employee.tagsLong with the modified array
        employee.tagsLong = updatedTagsLong;
      
        if (isSelected(clickedTag)) {
          // Remove the tag if it is already selected
          setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== clickedTag));
        } else {
          // Add the tag if it is not selected
          setSelectedTags([...selectedTags, clickedTag]);
        }
      };

      const isSelected = (tag) => {
        return selectedTags.includes(tag);
      };

    return (
        <>
            {tagsArray.map((tag, index) => (
                <div
                    onClick={() => pushTagToArray(tag)}
                    className={`modal-container-content__tags ${isSelected(tag) ? "modal-container-content__tags__used" : ""}`}
                    key={index}
                    >
                    {tag}
                </div>
            ))}
        </>
    )
}
