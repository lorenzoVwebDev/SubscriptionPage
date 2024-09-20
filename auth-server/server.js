const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

console.log(process)
