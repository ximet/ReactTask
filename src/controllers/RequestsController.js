const RequestController = {
  getLocationsSearch: async searchString => {
    let responseData = {};
    try {
      const { data } = await ApiService.getLocationsSearch(searchString);
      responseData = data.locations;
    } catch (error) {
      console.error(error);
    }
    return responseData;
  }
};

export default RequestController;
