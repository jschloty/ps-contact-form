Bug list:
Page 1 not submitting after token expiry.
Issues with session ID. Either not assigning true unique id, or expiry is too long.
Backend does not understand what to do when a duplicate session ID is submitted.
Backend does not understand what to do when a duplicate contact is created in GHL.
Mobile version of calendar is broken.
Contact somehow gets to calendar without a session ID in the database, form should reroute to page 1 and skip
  back to page 3 when complete instead of current ZIP entry.

