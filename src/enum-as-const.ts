const STATUS = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  PENDING: 'Pending'
} as const;


function getStatus(status: typeof STATUS[keyof typeof STATUS]) {
  if (status === STATUS.ACTIVE) {
    return 'Active';
  } else if (status === 'Inactive') {
    return 'Inactive';
  } else if (status === 'Pending') {
    return 'Pending';
  }
}

const test = getStatus(STATUS.ACTIVE);
