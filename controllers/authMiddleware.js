const authMiddleware = (req, res, next) => {
    if (req.session && req.session.userId) {
        // User is logged in
        // You can perform any session-related operations here
        // For example, you can retrieve the user from the database and attach it to the request object
        // Then, other route handlers can access the user via req.user
        User.findById(req.session.userId, (err, user) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to retrieve user' });
            }
            req.user = user;
            next();
        });
    } else {
        // User is not logged in
        // You can handle unauthorized requests here
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = authMiddleware;
