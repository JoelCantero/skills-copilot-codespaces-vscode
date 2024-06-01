function skillsMember() {
  return {
    skills: ['HTML', 'CSS', 'JavaScript'],
    addSkill: function (skill) {
      this.skills.push(skill);
    },
  };
}