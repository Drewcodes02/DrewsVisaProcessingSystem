const authorize = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }
  
  return (req, res, next) => {
    if (!req.user || (roles.length && !roles.includes(req.user.role))) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  };
};

module.exports = authorize;
