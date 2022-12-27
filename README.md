This is a simple web application which consists in authenticating with your GitHub account,
and then your profile information and your personal repositories are fetched, and also listed in the page.

As the user and repositories are listed, afterwards you can check your profile information, like your username,
your github_id, or you can also click the link to be redirected to your github profile.

Also, your repositories are listed on the center of the page, where you can check each repo in a card item,
containing information like name, the language used, a random generated colour pattern but you can click the link to visit the github repo, too.

## Running the app

1. run in your terminal:
   > `git clone git@github.com:ReniKaziu/github_repos.git`
2. Docker is required to be installed, so make sure you have Docker in your environment.
3. run in the terminal:
   > `docker-compose build`
4. after that, run:
   > `docker-compose up`
5. make sure you create a mysql schema in your selected port and with your credentials
6. As all the containers are created, you may search on your browser
   > `http://localhost:3000`
