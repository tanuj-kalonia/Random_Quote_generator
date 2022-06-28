
## A random Quote generator is a web App that fetches rendom quotes or piece of advice from an api and display the data using a fetch method.

### This is implemented in react, so I am using a library that is AXIOS.
this lib provides many useful methods to fetch the data from the API.

example :
    axios.get('API_LINK')
      .then((response)=>{
          console.log(response)
      }
      .catch((error) => {
          console.log(error)
      }
