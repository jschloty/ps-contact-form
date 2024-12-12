## Bug list:

- ~~Page 1 not submitting after token expiry.~~
- Issues with session ID. Either not assigning true unique id, or expiry is too long. --Fixed? Needs testing
- Backend does not understand what to do when a duplicate session ID is submitted. --Fixed? Needs testing
- Backend does not understand what to do when a duplicate contact is created in GHL. --Fixed? Needs testing
- Mobile version of calendar is broken.
- If contact somehow gets to calendar without a session ID in the database, form should reroute to page 1-esque form and skip
back to page 3 when complete instead of current ZIP entry.
- block editor: text persists when page is changed while array is fresh

