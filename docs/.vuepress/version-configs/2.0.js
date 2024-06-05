/* set version */
let version = '2.0';

/* version prefix setter */
function setVersionPrefix(children) {
    if (children.constructor === Array) {
        return children.map(child => {
            child[0] = `/${version}/${child[0]}`;
            return child;
        });
    }
    return `/${version}/${children}`;
}

/* module export */
module.exports = [
    [setVersionPrefix('introduction/introductions'), 'Introduction'],

    [setVersionPrefix('lead/leads'), 'Leads'],

    [setVersionPrefix('quote/quotes'), 'Quotes'],

    [setVersionPrefix('mail/mails'), 'Mails'],

    [setVersionPrefix('activity/activities'), 'Activities'],

    [setVersionPrefix('contact/contacts'), 'Contacts'],

    [setVersionPrefix('product/products'), 'Products'],

    {
        title: 'Settings',
        path: setVersionPrefix('settings'),
        collapsable: true,
        children: setVersionPrefix([
            ['settings/group', 'Groups'],
            ['settings/role', 'Roles'],
            ['settings/user', 'Users'],
            ['settings/pipeline', 'Pipelines'],
            ['settings/source', 'Sources'],
            ['settings/type', 'Types'],
            ['settings/attribute', 'Attributes'],
            ['settings/emailtemplate', 'Email Templates'],
            ['settings/workflow', 'Workflows'],
            ['settings/webforms', 'Web Forms'],
            ['settings/tags', 'Tags'],
        ])
    },    

    [setVersionPrefix('configure/configuration'), 'Configuration'],
]
