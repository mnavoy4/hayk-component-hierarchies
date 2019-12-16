## Google Search Results

Your task is to use React components to recreate this:

![Google search results](./google-search-results.png)

We've loaded some data into your App component's state. Use this data to pass down values through a component hierarchy to recreate the page shown. Some notes:

* Your solution does not need to be adaptive or responsive
* Not all properties are present on every object. For example, one search result has deep links, but another has cards. Your solution should be able to accomodate both.
* Some properties need to be interpreted. For example, most dates will need to be put in the correct format. A package such as `dayjs` or `date-fns` is recommended.
* Implement the detail/summary expand and collapse for the "People also ask" section
* Some things that may come in handy:
    * [Avatar URL](https://lh3.googleusercontent.com/-W85Kft4LxYk/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfuaNPMpoEmUvu4WR_lx0wXeH32pg.CMID/s64-c/photo.jpg)
    * [Google Logo](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png)
    * For the icons for search, news, maps, videos, images, kebab, and bento, use a glyph library like Font Awesome
    * Google's web search typeface is Arial
