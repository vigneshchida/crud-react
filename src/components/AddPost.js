import React from "react";

export const AddPost = ({ onAdd }) => {
    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        onAdd(evt.target.title.value, evt.target.post.value);
        evt.target.title.value = "";
        evt.target.post.value = "";
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <h3>Add Post</h3>
            <input placeholder="Title" name="title" />
            <input placeholder="Post" name="post" />
            <button onSubmit={handleOnSubmit}>Add</button>
            <hr />
        </form>
    );
};
