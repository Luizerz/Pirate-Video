class CustomStorage {
    getFavoriteList() {
      let favoriteList = JSON.parse(localStorage.getItem('favoriteList'))
      if (favoriteList == null){
          this.#createFavoriteList()
          favoriteList = JSON.parse(localStorage.getItem('favoriteList'))
      }
      return favoriteList
    }
    addItem(obj) {
      let tempList = this.getFavoriteList()
      tempList.push(obj)
      localStorage.setItem('favoriteList', JSON.stringify(tempList))
    }
    removeByID(objID) {
      let tempList = this.getFavoriteList()
      tempList.forEach((element, index) => {
          if (element.id == objID){
              tempList.splice(index, 1)
          }
      });
      localStorage.setItem('favoriteList', JSON.stringify(tempList))
    }
    getItem(objID){
      const tempList = this.getFavoriteList()
      let isOnTheList = false
      tempList.forEach((element)=>{
        if (element.id == objID){
          isOnTheList = true
        }
      })
      return isOnTheList
    }
    #createFavoriteList() {
      localStorage.setItem('favoriteList', JSON.stringify([]))
    }
  }
  
  const storage = new CustomStorage()
  
  export default storage