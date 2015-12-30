var CronJob = require('cron').CronJob;
var job = new CronJob('00 30 15 * * 1-5', function() {
  /*
   * Runs every weekday (Monday through Friday)
   * at 15:30:00 PM. It does not run on Saturday
   * or Sunday.
   */
    console.log('cron job Runs: ',new Date());

  }, function () {
    /* This function is executed when the job stops */
    console.log('cron job stops');
  },
  true, /* Start the job right now */
  'Asia/Taipei' /* Time zone of this job. */
);
console.log("Now:"+new Date());
job.start();