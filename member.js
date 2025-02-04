function skillsMember() {
    const member = {
        name: 'John Doe',
        skills: ['JavaScript', 'React', 'Node.js'],
        addSkill: function(skill) {
            this.skills.push(skill);
        },
        getSkills: function() {
            return this.skills;
        }
    };

    return member;
}