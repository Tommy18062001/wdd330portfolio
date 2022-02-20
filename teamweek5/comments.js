// comments object
const commentList = []

export default class Comments {
    constructor(elementId) {
      this.parentElement = document.getElementById(elementId);
      this.addButton = this.addButton();
    }

    // show all of our comment
    getAllComments() {
        return commentList;
    }

    filterCommentByName() {

    }

    addComment() {

    }

    addSubmitListener() {
        
    }


  }