function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      // If the user is not authenticated, send a 401 Unauthorized status code
      res.status(401).json({ message: 'Unauthorized' });
    }
  }
  
module.exports = ensureAuthenticated;