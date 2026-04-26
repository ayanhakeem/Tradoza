const dns = require('dns');
const hostname = 'zerodacluster.thk5dlu.mongodb.net';

dns.resolveSrv('_mongodb._tcp.' + hostname, (err, addresses) => {
  if (err) {
    console.error('SRV Resolution failed:', err);
  } else {
    console.log('SRV Records:', addresses);
  }
});

dns.lookup(hostname, (err, address, family) => {
  if (err) {
    console.error('Direct Lookup failed:', err);
  } else {
    console.log('Direct Address:', address);
  }
});
