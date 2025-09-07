import React from "react";
import { useParams, Link } from "react-router-dom";
import courses from "../utils/data";
import { Tab, Nav, Row, Col, Card } from "react-bootstrap";

function CourseDetails() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <h2 className="text-center py-5">الكورس غير موجود</h2>;

  return (
    <div className="container py-5" dir="rtl" lang="ar">
      {/* هيدر الكورس */}
      <div className="row mb-4 align-items-center">
        <div className="col-md-6">
          <img
            src={course.image}
            alt={course.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold">{course.title}</h1>
          <p className="text-muted">{course.description}</p>
          <p>
            <strong>السعر:</strong> {course.price} جنيه
          </p>
          <p>
            <strong>المدة:</strong> {course.duration} ({course.lectures})
          </p>
          <p>
            <strong>الشهادة:</strong> {course.certificate}
          </p>

          <Link to={`/reservation/${course.slug}`} className="btn btn-primary btn-lg">
            احجز الآن
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <Tab.Container defaultActiveKey="features">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {course.features && (
                <Nav.Item>
                  <Nav.Link eventKey="features">المميزات</Nav.Link>
                </Nav.Item>
              )}
              {course.levels && (
                <Nav.Item>
                  <Nav.Link eventKey="levels">المستويات</Nav.Link>
                </Nav.Item>
              )}
              {course.topics && (
                <Nav.Item>
                  <Nav.Link eventKey="topics">المحاور</Nav.Link>
                </Nav.Item>
              )}
              {course.courseDuration && (
                <Nav.Item>
                  <Nav.Link eventKey="duration">المدة</Nav.Link>
                </Nav.Item>
              )}
              {course.projects && (
                <Nav.Item>
                  <Nav.Link eventKey="projects">المشاريع</Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Col>

          <Col sm={9}>
            <Tab.Content>
              {/* المميزات */}
              {course.features && (
                <Tab.Pane eventKey="features">
                  <Row>
                    {course.features.map((f, idx) => (
                      <Col md={6} key={idx} className="mb-3">
                        <Card className="h-100 shadow-sm">
                          <Card.Body> {f}</Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              )}

              {/* المستويات */}
              {course.levels && (
                <Tab.Pane eventKey="levels">
                  <Row>
                    {course.levels.map((level, idx) => (
                      <Col md={6} key={idx} className="mb-3">
                        <Card className="h-100 shadow-sm">
                          <Card.Body>
                            <Card.Title>{level.name}</Card.Title>
                            <ul>
                              {level.details.map((d, i) => (
                                <li key={i}> {d}</li>
                              ))}
                            </ul>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              )}

              {/* المحاور */}
              {course.topics && (
                <Tab.Pane eventKey="topics">
                  <Row>
                    {course.topics.map((t, idx) => (
                      <Col md={6} key={idx} className="mb-3">
                        <Card className="h-100 shadow-sm">
                          <Card.Body> {t}</Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              )}

              {/* المدة */}
              {course.courseDuration && (
                <Tab.Pane eventKey="duration">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <p> مكثف: {course.courseDuration.intensive}</p>
                      <p> عادي: {course.courseDuration.normal}</p>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              )}

              {/* المشاريع */}
              {course.projects && (
                <Tab.Pane eventKey="projects">
                  <Row>
                    {course.projects.map((p, idx) => (
                      <Col md={6} key={idx} className="mb-3">
                        <Card className="h-100 shadow-sm">
                          <Card.Body> {p}</Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              )}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default CourseDetails;
