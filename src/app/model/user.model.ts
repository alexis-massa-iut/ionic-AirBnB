export class User {
    constructor(
        public id: string,
        public username: string,
        public password: string
    ) { }

    /**
     * Get username
     * @returns {string}
     */
    getUsername(): string { return this.username; }

    /**
     * Get password
     * @returns {string}
     */
    getPassword(): string { return this.password; }
}