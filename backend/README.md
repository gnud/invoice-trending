# invoice-trending server

# Usage
TBD

# Development

## Install dependencies

```
npm install
```

## Run dev

Running development

```
npm start
```

## TDD

- Phase 1
Write a test that will fail

- Phase 2
Write a corresponding code that will pass the test

- Phase 3
Commit

Running test

```
npm test
```

# Docker

## .env
TBD

## Database MySQL container

```
docker-compose up
```

### Troubleshoot

```
sudo ss -natpl | grep 3306
```
Should list the service having a TCP sock listener
If not, something is wrong.

if you have mysql client locally
```
mysql -h0.0.0.0 -utrendusr -p
```

Check if db container is running 
```
docker-compose ps
```

### Use mysql shell as root

```
docker-compose exec db bash
mysql -uroot -p
```

### Initial setup

Call these commands in mysql shell as root inside container

```
ALTER USER 'trendusr'@'%' IDENTIFIED WITH mysql_native_password BY 'userexample';
```

Create test database

```
create database trendapp_test
```

Allow access to the database

```
use trendapp
grant ALL PRIVILEGES ON *.* TO 'trendusr';
```

**Note**: don't do this on production, make sure
you allow only grant selected PRIVILEGES bare
to use the app.

# IDE settings

## WebStorm

ESLint [setup](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_linters_eslint_install) will
allow detection of rules mismatch.

# Troubleshot

## WebStorm

- "describe" and "it" are not recognizable by the IDE.

**Solution**:
Open settings go to javascript/libraries and click
download, find jest and click OK.
Now "describe" and "it" are recognizable by the IDE.

# TODOS

- [ ] TBD

