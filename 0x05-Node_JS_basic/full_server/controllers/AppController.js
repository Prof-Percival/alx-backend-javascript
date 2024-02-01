/**
 * Contains the miscellaneous route handlers.
 * @author Prof. Percival <https://github.com/Prof-Percival>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
