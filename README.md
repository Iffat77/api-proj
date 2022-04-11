# A REST API archive addition to NASA's (Astromony Picture Of The Day) API


## <b> Description </b>
- This is a RESTful API which is designed to provide an Archive of the exsisting NASA (APOTD) API. 

- This API will allow users to have access to an entire archive of the (APOTD) API from NASA. The archive begins at (January 1st, 2015) and continues to (March 31st, 2022).

## API Documentation

- The base URL will be <link>https://apotd-api.herokuapp.com/api/links</link>

- <b>Endpoints </b>

  `/links` to get all links from apotd archive
  `/links/id` to get single apotd 
  
- Model

  Models are represented as such 

    - _id: Unique id for each astronomy picture of the day
   -  title: Title of the apotd post
   -  link: link to the nasa apotd api
   -  date: date the post was created
   -  __v: version number of the post


### Upcomming Features

  - New endpoints will be added to allow sorting by date & title.

### Disclaimer

  - This Api is an archive built upon the NASA Apotd Api.